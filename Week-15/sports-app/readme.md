## Functional Requirement

- User should create account and login
- User can see list of matches and live match scores
- User should subscribe to get more features

## Non-Functional Requirement

- Able to handle high level traffic and database run down
- Low latency
- Reliable

## API Design

- /user(Post method)-->/user/signup--> /user/login
- /subscribe(Post Method)
- /sports(Post Method)-->/post/matches(Authenticated)
  - /sports/matches/upcoming(get - upcoming matches)
  - /sports/matches/live(get - live matches)

## Screenshots

1.High Level Diagram
![HLD](https://user-images.githubusercontent.com/49364985/201501247-c4c333fd-60e3-4916-bf8e-3e440f5ca0a4.jpg)