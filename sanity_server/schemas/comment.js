export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
        name: 'time',
        title: 'Time',
        type: 'datetime',
      },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'likedBy',
      title: 'LikedBy',
      type: 'array',
      of: [{type: 'user'}],
    },
  ],
}
