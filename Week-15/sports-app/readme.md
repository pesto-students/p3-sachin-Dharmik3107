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
![HLD](https://user-images.githubusercontent.com/49364985/201501612-50b10b01-f723-4406-afe3-4c282fb4c720.jpg)
