import { Meteor } from 'meteor/meteor';
import Framework7 from 'framework7/lite-bundle';
import Framework7Svelte from 'framework7-svelte';
import App from '../imports/ui/App.svelte';
import 'framework7/framework7-bundle.css';
Framework7.use(Framework7Svelte);


  new App({
    target: document.getElementById('app')
  });
