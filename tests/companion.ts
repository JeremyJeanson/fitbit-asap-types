import asap from "fitbit-asap/companion";


asap.send("See you later, alligator.");

asap.send("See you later, alligator.", { timeout: 1000 });

asap.onmessage = message => {
    console.log(message); // After a while, crocodile.
};

asap.cancel();

asap.cancel(1);