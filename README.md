# imkit-vue-sdk Deployment and Integration Guide

This guide will walk you through the process of deploying and integrating the `imkit-vue-sdk` into your web application. You can deploy the SDK on a cloud hosting service, such as Firebase Hosting or Netlify, a local web server, or along with your frontend folder under your NGINX.

## Configuration

In the root directory, the `config.json` file should be set with the following parameters:

- `domain`: The domain name for the chat server.
- `clientKey`: The client key for authentication.
- `token`: The token used for authorization.
- `translationApiKey`: The API key for Google's translation service.
- `mapApiKey`: The API key for Google Maps.

The `config.json` file also includes Firebase configuration parameters under `firebaseConfig` and `firebaseVapidKey`.

## Deployment

### Firebase Hosting

Follow these steps to deploy on Firebase Hosting:

1. Install Firebase CLI and log in to your Firebase account.
2. Initialize your project using `firebase init`.
3. Select `Hosting` and choose your Firebase project.
4. Set your public directory and configure it as a single-page app.
5. Deploy your site using `firebase deploy`.

### Netlify

Follow these steps to deploy on Netlify:

1. Log in to your Netlify account.
2. Click on `New site from Git`.
3. Connect with your Git provider and choose your repository.
4. Set your build command and publish directory.
5. Click `Deploy site`.

### NGINX

Follow these steps to deploy on NGINX:

1. Copy your project to your server.
2. Configure your NGINX server block and set the root to your project's directory.
3. Restart NGINX to apply the changes.

### Local Web Server

Follow these steps to deploy on a local web server:

1. Install live-server using `npm install -g live-server`.
2. Run `npx live-server` in your project directory.

## Integration

Integrating the `imkit-vue-sdk` into your web application is a straightforward process that involves deploying the SDK on your web server and embedding the chat UI in your webpage using an iframe.

1. **Deploy the SDK on your web server**: Clone the SDK repository from GitHub ([https://github.com/imkit/imkit-vue-sdk](https://github.com/imkit/imkit-vue-sdk)) and configure the SDK with your settings as detailed in the `config.json` file.

2. **Embed the chat UI using an iframe**: The chat UI can be easily embedded anywhere on your webpage using an iframe. This provides the flexibility to include the chat UI as a part of your existing webpage, or to use it as the main content of a page. Here's how you can do it:

    - **As part of your webpage**: You can embed the chat UI anywhere on your webpage by including the following iframe in your HTML code. Remember to replace `your_token` (and `your_room_id` if necessary) with your actual values.
    
    ```html
    <!-- To show both room list and chatroom -->
    <iframe src="https://imkit-vue-sdk.web.app/?token=your_token"></iframe>
    
    <!-- To show a specific chatroom only -->
    <iframe src="https://imkit-vue-sdk.web.app/?token=your_token&roomId=your_room_id"></iframe>
    ```

    - **As a full-page chat application**: Alternatively, if you want to use the chat UI as the main content of a page, you can use the provided `index.html` as a full-page entry point. Just ensure that the `config.json` file is correctly configured, and the `index.html` file is properly referenced in your web server's configuration.

This way, you can seamlessly integrate `imkit-vue-sdk` into your web application, enhancing its functionality with real-time chat features. Enjoy your web application!