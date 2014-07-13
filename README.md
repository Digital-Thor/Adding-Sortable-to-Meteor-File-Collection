## fileCollection + jobCollection Sample App

This demo app uses fileCollection's built-in support for [Resumable.js](http://www.resumablejs.com/) to allow drag and drop uploading of files. Beyond that, it presents a simple image management grid with basic metadata, user acounts with file ownership, previews of images with click to load, and the ability to download or delete files.

To set-up, make sure you have [meteorite](https://atmospherejs.com/docs/installing) installed.

Then just run `mrt` in this directory and then once the app server is running, point your browser at `http://localhost:3000/`.

I'm in the process of adding the following functionality as well:

It also uses jobCollection to manage creation of thumbnail images for each uploaded file.