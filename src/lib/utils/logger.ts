import bunyan, { RotatingFileStream } from "bunyan";
import { Writable } from "stream";

import cl from "cli-color";
import path from "path";
import terminalLink from "terminal-link";
import fs from "fs";


const stream = new Writable({
  write: async (chunk, encoding, callback) => {
    console.log(pretty(JSON.parse(chunk.toString())));
    callback();
  },
});

function pretty(data: any) {
  const date = new Date(data.time);
  const time =
    date.getHours().toString() +
    ":" +
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":" +
    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());

  const service = data.service;

  let level = cl.blue.bold("INFO   │");
  switch (data.level) {
    case bunyan.ERROR:
      level = cl.redBright.bold("ERROR  │");
      break;
    case bunyan.FATAL:
      level = cl.red.bold("FATAL  │");
      break;
    case bunyan.DEBUG:
      level = cl.magenta.bold("DEBUG  │");
      break;
    case bunyan.WARN:
      level = cl.yellow.bold("ALERT  │");
      break;
    case bunyan.TRACE:
      level = cl.cyan.bold("TRACE  │");
      break;
  }

  const serv = cl.xterm(208)("⧮ " + service);
  const source =
    cl.xterm(240)("@" + data.package) +
    " " +
    cl.xterm(240)(
      "⇆ " + terminalLink(path.parse(data.src.file).name, data.src.file)
    );

  const method = cl.yellow.bold(data.method);
  const statusCode = cl.green(data.statusCode);
  const url = cl.magenta("→ ") + cl.xterm(250)(data.path);
  const responseTime = cl.cyanBright(data.responseTime + "ms");
  const pathMQ = cl.xterm(208)("⧮ " + data.pathMQ);

  const serv_v = (
    data.pathMQ ? pathMQ + cl.magenta(" → ") + serv : serv
  );

  if (data.err) {
    const errName = data.err.name;
    let stack: string[] = data.err.stack.split("\n");
    const cause = data.err.cause;


    stack = stack.slice(1, stack.length);
    stack = stack.map(
      (val) => time + "  " + level + "  " + cl.red("    ") + cl.xterm(240)(val)
    );

    return (
      time +
      "  " +
      level +
      "  " +
      (service ? serv_v + "  " : "") +
      (data.statusCode ? statusCode + " " : "") +
      (data.path ? url + " " : "") +
      (data.responseTime ? responseTime + "  " : "") +
      data.msg +
      "  " +
      source +
      "\n" +
      time +
      "  " +
      level +
      "  " +
      cl.red.bold("   ⮩  " + errName) +
      "\n" +
      time +
      "  " +
      level +
      "  " +
      cl.red("      message: ") +
      cl.xterm(240)(data.err.message) +
      "\n" +
      time +
      "  " +
      level +
      "  " +
      cl.red("      cause: ") +
      cl.xterm(240)(cause ?? "undefined") +
      "\n" +
      time +
      "  " +
      level +
      "  " +
      cl.red("      stack: ") +
      cl.xterm(240)("[" + stack.length + "]\n") +
      stack.join("\n")
    );
  }

  return (
    time +
    "  " +
    level +
    "  " +
    (service ? serv_v + "  " : "") +
    (data.method ? method + " " : "") +
    (data.statusCode ? statusCode + " " : "") +
    (data.path ? url + " " : "") +
    (data.responseTime ? responseTime + " " : "") +
    " " + data.msg +
    "  " +
    source
  );
}

export function createLogger(): bunyan {
  const dir = path.resolve(path.resolve(), "logs/");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
  
  return bunyan.createLogger({
    name: "microfields",
    src: true,
    serializers: bunyan.stdSerializers,
    streams: [
      {
        stream,
      },
      {
        stream: new RotatingFileStream({
          path: path.resolve(path.resolve(), "logs/" + new Date().toISOString() + "-logs.log"),
          period: '1d',
        })
      }
    ],
  });
}

export const logger = createLogger();
