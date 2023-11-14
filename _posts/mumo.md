---
title: "Mumo App"
coverImage: "/assets/work/solespy-app/cover.webp"
date: "2023-05-01T05:55:07.322Z"
halfImages:
thirdImages:
youtube:
mainImage: "/assets/work/solespy-app/cover.webp"
tags:
  - "React Native"
  - "Firebase"
---

## Migrating the SoleSpy website to app

Following the successful rollout of the SoleSpy website, it became evident that the vast majority, about 95%, of users were accessing the platform via mobile devices. Acknowledging the advantages of mobile apps in terms of enhancing user retention and integrating added features, I embarked on the journey to develop the SoleSpy App, utilizing React Native and Expo.

### Front End Design and Development

In the initial phase of the project, the focus was primarily on front-end design and development. The first step involved meticulously designing the user interface using Figma, ensuring a smooth and intuitive experience for our users. Once the design was finalized, the next step was to bring this design to life. This was achieved by crafting the necessary components using React Native, a powerful framework that allowed for seamless translation of the design into a functional mobile app.

### Integrating the Backend

Moving on to the backbone of the app—the backend, the key task was to fill the app with data. To accomplish this, I leveraged the Realm React Native SDK to establish a direct connection with my MongoDB database. This efficient bridge between the database and the app ensured real-time data accessibility, allowing the app to serve up-to-date sneaker prices and details to our users.

### Introducing Additional Features: The Price Alerts System

Aiming to enrich the app with features not present on the website, I developed a price alerts mechanism. This feature notifies users when the price of a particular sneaker drops, enhancing user engagement and utility. The alerts system was built using Firebase and Expo-Notifications.

To facilitate this, Firebase Auth was implemented, allowing users to create shoe subscriptions. Firebase Cloud Functions were employed to dispatch the notifications. Additionally, a separate table was created in the MongoDB database, which recorded the daily prices of each sneaker in every size.

To analyze this vast pool of data and trigger alerts where price drops were detected, I crafted a Python script. This script was designed to scrutinize the data daily and generate notification documents in Firebase for any price reductions, ensuring our users never miss a good deal.

### App Launch

So far the app has had 1,000 downloads with 250 registered users. Check it out [here](https://apps.apple.com/gb/app/solespy/id6449229395)
