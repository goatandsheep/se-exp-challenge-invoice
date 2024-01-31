# Wave Front-end Challenge

## Introduction

This is my attempt at the Wave front end challenge. I'm particularly proud of...

### Setup

To run this application:

1. Make sure you have NPM installed. I am using version 20.11.0, which is LTS at the time of writing. Look into managing your NPM version with NVM.
2. run `npm i`
3. build: `npm run build`
4. run the code: `npm run dev`

### Notes

As I'm working on this project I'm taking notes on what I'm doing and why.

I hope to have fun building this project! My first impression is that the projects are possibly for features Wave is interested in expanding. I am a current Wave user and hopefully I can use my experience to come up with creative solutions to some of the problems I have faced while using the product.

This project is a page for updating data for users' clients for invoicing purposes. Although I read the requirements, I'm also studying the json to understand the structure to give additional hints of what the requirements entail.

The requirements ask for a simple form. A basic HTTP form could do the job of this, but it would not be reusable nor composable.

My thoughts are to make a vertical list of customers and have a standard layout for displaying the values for each attribute for each customer. Pressing an edit button would replace the view from display mode to edit mode and display a form where values can be set before being submitted. I intend to do a fairly simple execution and make one interesting feature to stand out. For example, I could cache the form values in `localstorage` in case something happens during editing? I will see. Probably not actually. It's better I just do a good job with good practices of a simple application.

Initialized using next.js

I started by cleaning up some of the boilerplate. Added a fetch. Started by printing the JSON object.

I'm choosing to use parent-child relationships for the forms instead of state for simplicity. I also am not using a dotenv strategy.

I created a modular approach to the settings since there's already 10 of them and bound to be more in the future.

I could use a check to disable the submit button, but there are other ways to submit forms so I'll just handle errors in the onSubmit.

The boilerplate styles seem to make things worse due to overflow but I'm not going to obsess over styling.

Some things I didn't do:

- [ ] Testing components with jest
- [ ] componentalized input fields
- [ ] typescript or documenting components or proptypes
- [ ] fixed autolinting


## Challenge Introduction

The purpose of this exercise is to create something that we can work on together during the onsite interview. We do this so that you get a chance to
collaborate with Wavers during the interview in a situation where you know something better than us (it's your code, after all!)

There isn't a hard deadline for this exercise; take as long as you need to complete it. However, in terms of total time spent actively
working on the challenge, we ask that you not spend more than a few hours, as we value your time and are happy to leave things open to
discussion in the on-site interview.

Please use whatever tools or frameworks you feel the most comfortable with.

Feel free to email [dev.careers@waveapps.com](dev.careers@waveapps.com) if you have any questions.

## Project Description

Imagine that this is the early days of Wave's history, and that we are prototyping a new invoicing system in Canada. Our prototype will be entirely API-driven and use a Javascript single-page app as the interface to our APIs.

One piece of the application will be a settings page where users can manage their customer information. Another team has provided a RESTful API to supply the data. We need you to start working on the client-side portion that will consume this API. For now, we would like to see some early front-end scaffolding to see how you would architect this.

The front-end prototype only needs to do the following:

- Retrieve the data from the GET endpoint
- Show a compact list of customers (in the JSON under the "customers" key)
- Let the user select a customer for editing, which shows a form with name, email, channel (value may be one of 'website', 'email', 'phone', 'word-of-mouth', 'other'), address, postal, city, province
- All fields are required. Empty values should present an error message if submitted.
- On form submit, log the JSON payload to console (no need to mock out server calls!)

The JSON will be available by calling GET https://rawgit.com/wvchallenges/se-exp-challenge-invoice/master/settings.json and can be retrieved using fetch, XHR, JQuery or whatever library you're familiar with.

Our desire is to approach this in a way that gives us composable, reusable code for use in later features and products. So some thought should be given to how this code could be expanded upon and repurposed. For now this will be a Canada only product and all addresses are assumed to be in Canada but we plan to roll this out to other countries later.
Do not worry about making the UI pretty! Just make it functional. All we ask is that it be easy to add more styling later.

Use whatever framework, tooling, scaffolding, starter-kits you are comfortable with that feel appropriate to this challenge. At Wave, we have used Backbone, Angular, React with the emphasis being heavily on React for current work. Your application should be easy to run and browse, and should run on either Linux or Mac OS X. It should not require any non open-source software.

### Documentation:

Please modify `README.md` to add:

1. Instructions on how to build/run your application
1. A paragraph or two about what you are particularly proud of in your implementation, and why.

## Submission Instructions

1. Clone the repository.
1. Complete your project as described above within your local repository.
1. Ensure everything you want to commit is committed.
1. Create a git bundle: `git bundle create your_name_front_end.bundle --all`
1. Email the bundle file to [dev.careers@waveapps.com](dev.careers@waveapps.com)

## Evaluation

Evaluation of your submission will be based on the following criteria.

1. Did you follow the instructions for submission?
1. Did you document your build/run instructions and your explanation of what you are proud of?
1. Is the code written such that it can easily be repurposed, reused and expanded upon?
1. Were the various parts of the application and their roles easily identifiable to the reviewer?
