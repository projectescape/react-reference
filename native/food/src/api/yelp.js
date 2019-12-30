import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 6sZxh-QLwWhxXoCwRgMUpjHM4xFKl-Ix6BsTn_3i47QefgF3VtehLtu7oWXxxZmzBP3BdSrQEP9W-on9C_y8N0ZT1gsCMjKZPWoquGf5hI0ji0yO8WCh7pjTgnAIXnYx"
  }
});
