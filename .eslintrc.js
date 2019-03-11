module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "jest": true,
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "16.8.4"
        }
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": "nesting",
            "allowChildren": false
        }],
        "jsx-a11y/label-has-associated-control": 0,
        "implicit-arrow-linebreak": 0,
    }
};
