# Football App

Woo! It's finally happening!

This repo hosts (what will in the future be) the separate individual apps built around an API database service.

## TO-PONDER 🤔

- What's a good structure for a GraphQL app?
    - How does it work?
    - What are those types?
    - Why/when are fields and args requried?
    - Are `query` and `mutation` at root arbitrary or required?
    - How to separate and scale schemas, queries, and mutations etc.
- MongoDB
    - User slugs vs IDs (that `_id` is a bit long and awkward for URLs...)
    - Working with the models.
- Monorepo, what's a nice way of separating the projects
    - while still being able to work on them simultaneously
    - sharing schemas across them? Possible/useful?
- GraphQL/MongoDB token API Authentication
    - https://www.youtube.com/watch?v=eu2VJ9dtwiY

## Structure?

- src
    - db
        - models
            - Player
    - graphQL
        - queries
            - player
        - mutations
            - player
    
## App functionality

- Users
    - be unique in the whole system
    - should use real name
    - unique name so urls will use `_id` or ` slug