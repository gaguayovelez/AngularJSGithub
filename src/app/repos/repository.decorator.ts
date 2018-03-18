import * as moment from 'moment';

export const repositoryDecorator = {
  getLastUpdate() {
    return moment(this.updated_at).fromNow();
  },

  getTotalIssues() {
    const openIssues = this.open_issues_count || 0;
    const closedIssues = this.closed_issues || 0;
    return openIssues + closedIssues;
  }
};
