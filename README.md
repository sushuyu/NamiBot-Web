# Overview

Nami Bot is a custom Discord bot designed exclusively for the r/lol Discord server. This bot provides functionalities related to Clash tournament schedules and server status updates by interacting with the Riot Games API. The website serves as a demo and documentation hub for the Nami Bot, showcasing its features and providing relevant information. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

Clash Tournament Schedules: Retrieve the latest Clash tournament schedules for specific regions using the !clash <region> command.

Server Status Checks: Check the current server status for a specific region using the !status <region> command.

## Available Regions

- NA (North America)
- EUW (Europe West)
- EUNE (Europe Nordic & East)
- OCE (Oceania)

## Usage
### Commands

!clash <region>: Retrieves the latest Clash tournament schedules.
    Example: !clashNA or !clashEUW

!status <region>: Checks the current server status.
    Example: !statusNA or !statusEUW

### Project Structure

App.js: The main entry point of the React application, featuring a background video and routing for different pages.
Components:

  ChatWindow: Interactive window where users can input commands and view bot responses. Includes 2 other components: ChatInput & ChatOutput.

  Layout: Determines which main nav component is currently visible.

  Nav: Navigation of the project.

  Documentation: Page providing detailed information about the bot's commands, usage, and APIs.

  Privacy: Page outlining the privacy practices of the bot and the website.