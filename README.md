# **Github repositories listing page**

## Project Setup

After cloning the repository on your local device, run the follwoing command to install the node module

```
npm install
```
and run 
```
npm start
```
to view the web app on browser at `localhost:3000`.

There are two more scripts i.e, `npm run style` and `npm run dev`.
`npm run style` is to build the CSS using Tailwind's JIT engine.

`npm run dev` is to run the `npm start` and `npm run style` 
simultaneously.

## Project Description

This is a Github repositories listing page to view the repositories by passing the required Github username.

After starting the project on browser, enter the Github username and hit enter.

Next, you will be redirected to the listing page with route having the provided Github username.

If the requests is successful, you'll be able to view the list of repos(max. 6 per page) with pagination(if applicable).

## API Used

For user details -

`https://api.github.com/users/GITHUB_USERNAME`

For repository details -

`https://api.github.com/users/GITHUB_USERNAME/repos?per_page=6&page=PAGE_NUMBER`

For language details of single repository -

`https://api.github.com/users/GITHUB_USERNAME/REPOSITORY_NAME/languages`
