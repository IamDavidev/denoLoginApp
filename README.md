# denoLoginApp

## Register

- [] define the user
  - email - unique
  - password - hashed - between 8 and 32 characters - must contain at least one number-special_character-lowecase_uppercase-uppercase_letter
    - regex - [a-zA-Z0-9!@#$%^&*]{8,32}
  - name - string - from 2 to 30 characters
    - regex - [a-zA-Z]{2,30}
  - id - uuid - unique
- [] define persistence of user { bbdd }
  - mongoDb or Postgres.
- [] Flow of register.
  - validate name
  - validate email
  - validate password
  - register user
- [] define endpoint of register
  - POST /register

## Login

- [] define credentials
- []

## Profile
