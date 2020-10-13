import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer rTv6_2eL5GTf5rEIZ4a336fA3UTOP11oH38Oh9OEVxIUD6ot0bg7gGE_Pt-edfIxYTETt2IBmBpoRxzuJJK0ecB6VAWQvXwuKKUWWf-77kXdlovMnBQlaQHXdSWGX3Yx'
  }
});

