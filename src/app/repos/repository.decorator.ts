import * as moment from 'moment';

export const repositoryDecorator = {
  getLastUpdate() {
    return moment(this.updated_at).fromNow();
  }
};
