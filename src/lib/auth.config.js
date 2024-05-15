export const msalConfig = {
    auth: {
        clientId: "a125bb61-40db-41e4-aa30-3c67cac512e6",
        authority: "https://login.microsoftonline.com/2b89d8ed-9ec4-4e5e-b552-71c1089bc548",
        redirectUri: location.origin,
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
export const loginRequest = {
    scopes: ["User.Read"]
};
export const tokenRequest = {
    scopes: ["User.Read", "Files.Read.All"],
};