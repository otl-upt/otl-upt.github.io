# readme.md

## what is this?

This is the kpi dashboard. It provides visibility into various KPIs for the business.

## how does it work?

Various agents run and consolidate data which is stored on o365 sharepoint. These files are then pulled down and visualized as requested by the various stakeholders.

## so you get data and show it? anything else i should know about that part of the app?

Currently it is fairly simple. We use MS Graph to authenticate and then retrieve the list of files from a specific location. The MS Graph response will have information about how the time date stamp and the app will ignore it if it already has that data cached. Currently we use local storage in the browser for caching data. Only a login to our o365 tenant is required for access as these are company wide metrics. The specifics of each KPI are specific to the stakeholder that sponsored and requested them. Ultimately, it is all under the control of the CFO.

## tell me more about these 'agents' that produce the files

The agents can get data from anywhere and do anything with it. They do have to output the data in a specific format. It's possible to look at the data in local storage if you open the app and the dev tools, but basically each agent will produce a json formatted file with named datasets in it and tables within those. These are all concat'd together for a final object which is used by the app.

At some point, it may be preferable to have individual data objects for each kpi card, but at the time of this document creation there was a constant need to at any time have a request to correlate data from one object to another, so the data is stored as a sort of global object for access throughout the app. The easiest example of this is the AR KPIs which require calculation of DSO. The daily sales data comes from revenue, however, and does not use the AR data from our accounting system because that is how the business currently calculates it. Similarly, even within the Billing KPI section, while we are visualizing groups of invoices or orders sometimes, we want to highlight data that exists in a different part of the data, such as the missing paperwork sections.

## any technical stuff i should know?

The dashboard itself is written using svelte which is a js framework/compiler similar to react/vue/angular. The agents are all powershell jobs currently although they could be anything as long as they drop the data in the same spot and the right format.

Currently this app is stored in a public repo, so no secrets or private info should be located here. Currently these KPIs are not secret as they are basic measurements for business processes that are typical for any business in this industry.