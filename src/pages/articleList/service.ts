import {get} from 'rnf';
import {ReService} from 'rnf';

export default class ArticleListService extends ReService {
  onLoadData = () => {
    this.dispatch({refreshing: true});
    this.dispatch({
      refreshing: false,
      articleList: '111',
      error: null,
    });
    get('https://wanandroid.com/wxarticle/list/408/1/json')
      .then((result) => {
        this.dispatch({
          refreshing: false,
          articleList: result.data.datas,
          error: null,
        });
      })
      .catch((error) => {
        this.dispatch({refreshing: false, error: error.message});
      });
  };
}
