/**
 * Created by renminghe on 2017/1/16.
 */

function DataSource() {
    this.category = (category) => {
        let res = new Promise((resolve,reject) => {
            getMoviesFromApi('category',category,(res) => {
                resolve(res);
            });
        });
        return res;
    };
    this.categoryDetail = (category) => {
        let res = new Promise((resolve,reject) => {
            getMoviesFromApi('categoryDetail',category,(res) => {
                resolve(res);
            });
        });
        return res;
    };
}


function getMoviesFromApi(type,category,cb) {

    let querStr = '';
    let str = '';
    if (type == 'category') str = 'https://route.showapi.com/958-1?';
    if (type == 'categoryDetail') str = 'https://route.showapi.com/958-2?';
    Object.keys(category).forEach((key) => {
        querStr += '&' + key + '=' + category[key]
    });
    querStr = querStr.substring(querStr.indexOf('&')+1);
    fetch(str+querStr)
        .then((response) => response.json())
        .then((responseJson) => {
            cb(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
}


module.exports = new DataSource();