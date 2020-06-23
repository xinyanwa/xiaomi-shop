// eslint-disable-next-line import/no-extraneous-dependencies
import Mock from 'mockjs';

Mock.mock('/api/user/login', {
  data: {
    id: 123,
  },
});
