const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
passport.use(new GoogleStrategy({
        clientID: "1093955630911-7qe1b555caucpnro67q31cj5p4ujtoi5.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));