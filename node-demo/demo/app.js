const serverHandle = (req, res) => {
    // 设置返回格式JSON
    res.setHeader('content-type', 'application/json');

    const resData = {
        name: 'xxx',
        site: 'csdn',
        env: process.env.NODE_ENV
    };

    res.end(
        JSON.stringify(resData)
    );


}

module.exports = serverHandle;
