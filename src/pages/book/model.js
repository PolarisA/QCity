import * as bookApi from './service';

export default {
  namespace: 'book',
  state: {

  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(bookApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
