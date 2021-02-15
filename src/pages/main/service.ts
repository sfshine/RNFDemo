import {ReService} from 'rnf';

export default class MainService extends ReService {
  private pageIdentifier = 'MainService#' + new Date().getTime();

  onLoadData = (link) => {
    fetch(link)
      .then((result) => result.text())
      .then((text) => {
        this.dispatch({
          result: text,
        });
      })
      .catch((error) => {
        this.dispatch({error: error.message});
      });
  };
  getPageIdentifier(): any {
    return this.pageIdentifier;
  }
}
