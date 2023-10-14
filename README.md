
<<<<<<< HEAD
<div align="center">
<h1 align="center">
<img src="" width="100" />
<br>microfields
</h1>
<h3>◦ HTTPStatus Exception: 401</h3>
<h3>◦ Developed with the software and tools below.</h3>
=======


<div align="center">
<h1 align="center">
<br>microfields
</h1>
<br/>
Microfields is a lightweight TypeScript microservice library designed to simplify the development of microservices. It provides essential tools and utilities for building scalable and maintainable microservices, allowing you to focus on your business logic.
<br/>
<br/>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<<<<<<< HEAD
<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style&logo=ts-node&logoColor=white" alt="tsnode" />
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Fastify-000000.svg?style&logo=Fastify&logoColor=white" alt="Fastify" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
=======
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/Fastify-000000.svg?style&logo=Fastify&logoColor=white" alt="Fastify" />
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
</p>
<p align="center">
<img src="https://img.shields.io/github/languages/top/fitchle/microfields?style&color=0891b2" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/fitchle/microfields?style&color=0284c7" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/fitchle/microfields?style&color=2563eb" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/fitchle/microfields?style&color=4f46e5" alt="GitHub license" />
</p>

</div>

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running microfields](#-running-microfields)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
<<<<<<< HEAD
- [👏 Acknowledgments](#-acknowledgments)
=======
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86


## 📍 Overview

  
-  **Project Name:** Microfields
 -  **License:** MIT License 
 -  **Contributors:** gimbledev 
 -  **Language:** TypeScript 
 -  **Libraries:** amqplib (for RabbitMQ), Bunyan, Prisma (optional)

## 📦 Features
-  **TypeScript Ready:** Microfields is written in TypeScript and provides strong typing out of the box for a better developer experience. 
-  **RabbitMQ Integration:** Seamlessly integrate with RabbitMQ using the `amqplib` library, enabling asynchronous communication between microservices. 
-  **Logging:** Microfields comes with the Bunyan logger preconfigured to help you track and debug your microservices easily. 
-  **Prisma Support (Optional):** If needed, you can use the Prisma ORM for database operations. Microfields offers optional support for Prisma.



## 📂 Repository Structure

```sh
└── microfields/
    ├── .gitignore
<<<<<<< HEAD
    ├── caching.drawio
    ├── caching.png
=======
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── rollup.config.js
    ├── src/
    │   ├── MicrofieldProps.ts
    │   ├── Microfields.ts
    │   ├── __tests__/
    │   │   └── test.ts
    │   ├── config.json
    │   ├── index.ts
    │   └── lib/
    │       ├── IServiceBaseProps.ts
    │       ├── ServiceBase.ts
    │       ├── ServiceGateway.ts
    │       ├── ServiceLoader.ts
    │       ├── ServiceManager.ts
    │       ├── ServiceMetadata.ts
    │       ├── connections/
    │       │   ├── Connection.ts
    │       │   ├── ConnectionManager.ts
    │       │   ├── ConnectionPriority.ts
    │       │   ├── logger/
    │       │   │   └── LoggerConnector.ts
    │       │   ├── prisma/
    │       │   │   ├── PrismaConnector.ts
    │       │   │   ├── PrismaService.ts
    │       │   │   ├── PrismaServiceProps.ts
    │       │   │   ├── loader/
    │       │   │   │   └── PrismaClientLoader.ts
    │       │   │   └── redis/
    │       │   │       ├── PrismaRedisExtension.ts
    │       │   │       └── RedisCacheProvider.ts
    │       │   ├── rabbitmq/
    │       │   │   ├── RabbitMQConnector.ts
    │       │   │   └── RabbitMQService.ts
    │       │   └── redis/
    │       │       ├── RedisConnector.ts
    │       │       └── RedisService.ts
    │       ├── decorators/
    │       │   └── ServiceDecorator.ts
    │       ├── messaging/
    │       │   └── ServiceConsumerBase.ts
    │       ├── router/
    │       │   ├── IRoute.ts
    │       │   ├── Route.ts
    │       │   ├── RouteData.ts
    │       │   ├── RouteHandler.ts
    │       │   ├── RouteLoader.ts
    │       │   └── decorators/
    │       │       ├── Router.ts
    │       │       └── RouterMetadata.ts
    │       └── utils/
    │           ├── logger.ts
    │           └── misc.ts
    ├── tsconfig.cjs.json
    ├── tsconfig.esm.json
    └── tsconfig.json
```
<<<<<<< HEAD

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                  | Summary                               |
| ---                                                                                   | ---                                   |
| [rollup.config.js](https://github.com/fitchle/microfields/blob/main/rollup.config.js) | HTTPStatus Exception: 401             |
| [pnpm-lock.yaml](https://github.com/fitchle/microfields/blob/main/pnpm-lock.yaml)     | Prompt exceeds max token limit: 4918. |
| [caching.drawio](https://github.com/fitchle/microfields/blob/main/caching.drawio)     | HTTPStatus Exception: 401             |

</details>

<details closed><summary>Src</summary>

| File                                                                                          | Summary                   |
| ---                                                                                           | ---                       |
| [index.ts](https://github.com/fitchle/microfields/blob/main/src/index.ts)                     | HTTPStatus Exception: 401 |
| [MicrofieldProps.ts](https://github.com/fitchle/microfields/blob/main/src/MicrofieldProps.ts) | HTTPStatus Exception: 401 |
| [Microfields.ts](https://github.com/fitchle/microfields/blob/main/src/Microfields.ts)         | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Lib</summary>

| File                                                                                                  | Summary                   |
| ---                                                                                                   | ---                       |
| [ServiceBase.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceBase.ts)             | HTTPStatus Exception: 401 |
| [IServiceBaseProps.ts](https://github.com/fitchle/microfields/blob/main/src/lib/IServiceBaseProps.ts) | HTTPStatus Exception: 401 |
| [ServiceGateway.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceGateway.ts)       | HTTPStatus Exception: 401 |
| [ServiceLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceLoader.ts)         | HTTPStatus Exception: 401 |
| [ServiceManager.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceManager.ts)       | HTTPStatus Exception: 401 |
| [ServiceMetadata.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceMetadata.ts)     | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Decorators</summary>

| File                                                                                                              | Summary                   |
| ---                                                                                                               | ---                       |
| [ServiceDecorator.ts](https://github.com/fitchle/microfields/blob/main/src/lib/decorators/ServiceDecorator.ts)    | HTTPStatus Exception: 401 |
| [Router.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/decorators/Router.ts)                 | HTTPStatus Exception: 401 |
| [RouterMetadata.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/decorators/RouterMetadata.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Messaging</summary>

| File                                                                                                                | Summary                   |
| ---                                                                                                                 | ---                       |
| [ServiceConsumerBase.ts](https://github.com/fitchle/microfields/blob/main/src/lib/messaging/ServiceConsumerBase.ts) | HTTPStatus Exception: 401 |

</details>

=======
<br/>


## 🚀 Getting Started

### 📦 **Dependencies**

Please ensure you have the following dependencies installed on your system:
`- ℹ️ NodeJS >=18 (tested)`

### 🔧 Installation

1. install package from npm.
```sh
npm install microfields
```
<br/>

2. Create your first microservice:
```ts
// index.ts

import { PrismaClient } from "@prisma/client";
import { Microfields, PrismaConnector, RabbitMQConnector } from "microfields";

const m = new Microfields();
const db = new PrismaClient();
m.addConnection(new RabbitMQConnector()).addConnection(new PrismaConnector({client:  db,}));

await  m.start();
```
<br/>


3. Create your first service!
```ts
// services/example/index.ts

import  { ServiceBase, Service }  from "microfields";

@Service({ port: 3981, name: "my_service" })
class MyService extends ServiceBase implements RabbitMQService, RedisService {
	redis!:  Redis;
	mq!:  Connection;
	channel!:  Channel;
	
	async  init() {
		// your code...
	}
}

export default MyService;
```

<br/>

4. Create your first router!
```ts
// routes/example.route.ts

import { Router, Route, RouteData } from "microfields";
import { z } from "zod";
import { MyService } from "..";

@Router({
	id: "example_router",
	path: "example", // URL, /example
	body: z.object({ // 💫 Zod Validation
		username: z.string(),
		email: z.string(),
		password: z.string()
	})
)}
class ExampleRouter extends Route<MyService> {
	async action(data:  RouteData) { // TRIGGERS POST METHOD
		// your backend codes...
		return {
			message: "Hello World!",
		};
	}
	
	async loader(data:  RouteData) { // TRIGGERS GET METHOD
		// your backend codes...
		return {
			message: "Hello World!",
		};
	}
}

export default ExampleRouter;
```

<br/>

### 🤖 Running microfields

```sh
npm start
```
<br/>


### 🧪 Tests
```sh
npm test
```

<br/>

## 🛣 Roadmap

> - [X] `ℹ️  Prisma Service`
> - [ ] `ℹ️  Data Caching with Redis`

<br/>
<br/>

## ⚙️ Modules

<details closed><summary>Microfields</summary>

| File                                                                                          | Summary                   |
| ---                                                                                           | ---                       |
| [index.ts](https://github.com/fitchle/microfields/blob/main/src/index.ts)                     | including library exports. |
| [MicrofieldProps.ts](https://github.com/fitchle/microfields/blob/main/src/MicrofieldProps.ts) | Properties of Microfield |
| [Microfields.ts](https://github.com/fitchle/microfields/blob/main/src/Microfields.ts)         | Main class for Library |

</details>

<details closed><summary>Service</summary>

| File                                                                                                  | Summary                   |
| ---                                                                                                   | ---                       |
| [ServiceBase.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceBase.ts)             | Base Interface for Services |
| [IServiceBaseProps.ts](https://github.com/fitchle/microfields/blob/main/src/lib/IServiceBaseProps.ts) | Properties for ServiceBase |
| [ServiceGateway.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceGateway.ts)       | Gateway for Messaging (RabbitMQ) |
| [ServiceLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceLoader.ts)         | Loader Class for Services |
| [ServiceManager.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceManager.ts)       | Service Registry |
| [ServiceMetadata.ts](https://github.com/fitchle/microfields/blob/main/src/lib/ServiceMetadata.ts)     | Service Metadata, its holding your service <br/>decorator data (name, port etc.) |

</details>




<details closed><summary>Decorators</summary>

| File                                                                                                              | Summary                   |
| ---                                                                                                               | ---                       |
| [ServiceDecorator.ts](https://github.com/fitchle/microfields/blob/main/src/lib/decorators/ServiceDecorator.ts)    | @Service Decorator, it holds port, name etc. |
| [Router.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/decorators/Router.ts)                 | @Router Decorator, it holds your router properties <br/>(url, id, params, body, query etc.) |
| [RouterMetadata.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/decorators/RouterMetadata.ts) | it holds decorator data. |

</details>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
<details closed><summary>Connections</summary>

| File                                                                                                                | Summary                   |
| ---                                                                                                                 | ---                       |
<<<<<<< HEAD
| [ConnectionPriority.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/ConnectionPriority.ts) | HTTPStatus Exception: 401 |
| [ConnectionManager.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/ConnectionManager.ts)   | HTTPStatus Exception: 401 |
| [Connection.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/Connection.ts)                 | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Redis</summary>

| File                                                                                                                                 | Summary                   |
| ---                                                                                                                                  | ---                       |
| [RedisConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/redis/RedisConnector.ts)                    | HTTPStatus Exception: 401 |
| [RedisService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/redis/RedisService.ts)                        | HTTPStatus Exception: 401 |
| [RedisCacheProvider.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/redis/RedisCacheProvider.ts)     | HTTPStatus Exception: 401 |
| [PrismaRedisExtension.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/redis/PrismaRedisExtension.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>Rabbitmq</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
| [RabbitMQConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/rabbitmq/RabbitMQConnector.ts) | HTTPStatus Exception: 401 |
| [RabbitMQService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/rabbitmq/RabbitMQService.ts)     | HTTPStatus Exception: 401 |

</details>

=======
| [ConnectionPriority.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/ConnectionPriority.ts) | Priority holder of Connection |
| [ConnectionManager.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/ConnectionManager.ts)   | Registry of Connections |
| [Connection.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/Connection.ts)                 | Connection Interface |

</details>
<details closed><summary>Redis (Under Construction 🚧)</summary>

| File                                                                                                                                 | Summary                   |
| ---                                                                                                                                  | ---                       |
| [RedisConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/redis/RedisConnector.ts)                    | Connector of Redis |
| [RedisService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/redis/RedisService.ts)                        | Provider of Redis |
| [RedisCacheProvider.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/redis/RedisCacheProvider.ts)     | Cache provider of Redis |
| [PrismaRedisExtension.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/redis/PrismaRedisExtension.ts) | Extension for Prisma |

</details>
<details closed><summary>RabbitMQ</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
| [RabbitMQConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/rabbitmq/RabbitMQConnector.ts) | RabbitMQ Connector, it connects your service to RabbitMQ. |
| [RabbitMQService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/rabbitmq/RabbitMQService.ts)     | RabbitMQ Service Interface |

</details>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
<details closed><summary>Logger</summary>

| File                                                                                                                 | Summary                   |
| ---                                                                                                                  | ---                       |
<<<<<<< HEAD
| [LoggerConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/logger/LoggerConnector.ts) | HTTPStatus Exception: 401 |

</details>

=======
| [LoggerConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/logger/LoggerConnector.ts) | Connector for Logger (Bunyan) |

</details>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
<details closed><summary>Prisma</summary>

| File                                                                                                                       | Summary                   |
| ---                                                                                                                        | ---                       |
<<<<<<< HEAD
| [PrismaServiceProps.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaServiceProps.ts) | HTTPStatus Exception: 401 |
| [PrismaConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaConnector.ts)       | HTTPStatus Exception: 401 |
| [PrismaService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaService.ts)           | HTTPStatus Exception: 401 |
=======
| [PrismaServiceProps.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaServiceProps.ts) | Properties of Prisma Service |
| [PrismaConnector.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaConnector.ts)       | Connector of Prisma, it connects your service to Prisma ORM. |
| [PrismaService.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/PrismaService.ts)           | Prisma Service Interface |
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86

</details>

<details closed><summary>Loader</summary>

| File                                                                                                                              | Summary                   |
| ---                                                                                                                               | ---                       |
<<<<<<< HEAD
| [PrismaClientLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/loader/PrismaClientLoader.ts) | HTTPStatus Exception: 401 |

</details>

=======
| [PrismaClientLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/connections/prisma/loader/PrismaClientLoader.ts) | Loader of Prisma Client |

</details>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
<details closed><summary>Router</summary>

| File                                                                                               | Summary                   |
| ---                                                                                                | ---                       |
<<<<<<< HEAD
| [RouteHandler.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteHandler.ts) | HTTPStatus Exception: 401 |
| [IRoute.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/IRoute.ts)             | HTTPStatus Exception: 401 |
| [Route.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/Route.ts)               | HTTPStatus Exception: 401 |
| [RouteData.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteData.ts)       | HTTPStatus Exception: 401 |
| [RouteLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteLoader.ts)   | HTTPStatus Exception: 401 |

</details>

=======
| [RouteHandler.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteHandler.ts) | Handler for Routers, it executes your action or load function. |
| [IRoute.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/IRoute.ts)             | Built-in Route Interface |
| [Route.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/Route.ts)               | Route Interface |
| [RouteData.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteData.ts)       | It holds body, params and MQ data. |
| [RouteLoader.ts](https://github.com/fitchle/microfields/blob/main/src/lib/router/RouteLoader.ts)   | Loader for your routes. |

</details>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86
<details closed><summary>Utils</summary>

| File                                                                                  | Summary                   |
| ---                                                                                   | ---                       |
<<<<<<< HEAD
| [misc.ts](https://github.com/fitchle/microfields/blob/main/src/lib/utils/misc.ts)     | HTTPStatus Exception: 401 |
| [logger.ts](https://github.com/fitchle/microfields/blob/main/src/lib/utils/logger.ts) | HTTPStatus Exception: 401 |

</details>

<details closed><summary>__tests__</summary>

| File                                                                              | Summary                   |
| ---                                                                               | ---                       |
| [test.ts](https://github.com/fitchle/microfields/blob/main/src/__tests__/test.ts) | HTTPStatus Exception: 401 |

</details>


## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. install from npm to project:
```sh
npm install microfields
```

2. Create
```sh
npm install
```

### 🤖 Running microfields

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

## 🛣 Roadmap

> - [X] `ℹ️  Prisma Service`
> - [ ] `ℹ️  Caching in Redis`


=======
| [misc.ts](https://github.com/fitchle/microfields/blob/main/src/lib/utils/misc.ts)     | general utility |
| [logger.ts](https://github.com/fitchle/microfields/blob/main/src/lib/utils/logger.ts) | logger utility |

</details>
<br/>
<br/>
>>>>>>> b915eaa2956d3d1885ccaadd15257ca2b0670c86


## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.


## 📄 License

This project is licensed under the `MIT` License. See the [MIT](LICENSE) file for additional info.


