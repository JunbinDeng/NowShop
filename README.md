# NowShop

NowShop is an e-commerce platform designed to streamline online shopping by integrating secure authentication, efficient product management, real-time shopping cart updates, and smooth order processing. Built using modern technologies like Angular and ASP.NET Core, NowShop ensures scalability, reliability, and a responsive user interface optimized for performance and ease of use.

## About the Project

NowShop aims to bridge the gap between buyers and sellers by offering a platform that is both intuitive and feature-rich. Key features include:

- **User Authentication:** Secure login and registration system.
- **Product Management:** Easy addition, modification, and deletion of products.
- **Shopping Cart:** Efficient cart system with real-time updates.
- **Order Processing:** Streamlined order placement and tracking.

## Technologies Used

NowShop utilizes a diverse tech stack to deliver its functionalities:

- **Backend:** C# with ASP.NET Core
- **Frontend:** Angular (TypeScript, HTML, SCSS)
- **Infrastructure:** Docker for containerization

## Project Structure

The project's directory structure is organized as follows:

```
NowShop/
├── API/                  # Backend ASP.NET Core application
│   ├── Controllers/      # API controllers
│   ├── Models/           # Data models
│   └── …                 # Other backend-related files
├── client/               # Frontend Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/     # Singleton services and components
│   │   │   ├── shared/   # Reusable components, directives, and pipes
│   │   │   ├── features/ # Feature-specific modules and components
│   │   │   └── …         # Other Angular modules and components
│   │   ├── environments/ # Environment-specific configurations
│   │   └── …             # Other frontend-related files
└── docker-compose.yml    # Docker configuration
```

The project follows Angular best practices, clearly separating core functionality, reusable elements, and feature-specific modules.

## Getting Started

Follow these instructions to set up NowShop locally.

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org)
- [Angular CLI](https://angular.dev/tools/cli)
- [Docker](https://www.docker.com/)

### Generate SSL Certificate

Run the following script to generate an SSL certificate for local development:

```shell
cd NowShop/client/ssl
./generate-localhost-cert.sh
```

### Installation

1. **Clone the Repository:**

   ```
   git clone https://github.com/JunbinDeng/NowShop.git
   ```

2. **Run with Docker:**

   ```
   cd NowShop
   docker-compose up
   ```

3. **Setup Backend:**

   ```
   cd API
   dotnet restore
   dotnet run
   ```

4. **Setup Frontend:**

   ```
   cd ../client
   npm install
   ng serve
   ```

## Local Payment Webhook Setup

For local testing of Stripe payment events, follow these steps:

1. **Listen for Webhook Events Locally**

Install and log in to the Stripe CLI, then run:

```bash
stripe listen --forward-to https://localhost:5001/api/payments/webhook -e payment_intent.succeeded
```

This command forwards `payment_intent.succeeded` events to your local webhook endpoint.

2. **Add `appsettings.json` Configuration**

In the `API` project root, create an `appsettings.json` file with the following content:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "StripeSettings": {
    "PublishableKey": "<YOUR_STRIPE_TEST_PUBLISHABLE_KEY>",
    "SecretKey": "<YOUR_STRIPE_TEST_SECRET_KEY>",
    "WebhookSecret": "<YOUR_STRIPE_TEST_WEBHOOK_SECRET>"
  },
  "AllowedHosts": "*"
}
```

Replace these keys with your own values from the Stripe Dashboard.

## Usage

Access NowShop at `http://localhost:4200` to explore products, manage your shopping cart, and complete purchases.

## Contributing

Contributions are welcome:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/NewFeature`).
3. Commit changes (`git commit -m 'Add feature'`).
4. Push changes (`git push origin feature/NewFeature`).
5. Submit a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for details.

## Acknowledgments

Thanks to all contributors and the open-source community for their support.
