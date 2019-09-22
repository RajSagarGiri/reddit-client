export default function FeedReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, [action.key]: action.posts };
    default:
      return state;
  }
}
