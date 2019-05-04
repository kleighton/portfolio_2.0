const PrimaryBtn = function (style, text, _callback) {
    const btn = document.createElement('btn');
    btn.setAttribute('type', 'button');
    btn.className = 'c-'+style+'-btn';
    btn.innerHTML = text;
    if (_callback) {
        btn.addEventListener('click', function (e) {
            _callback(e)
        })
    }

    /* Methods */
    function update(text, _callback) {
        btn.removeEventListener('click', {});
        btn.innerHTML = text;
        if (_callback) {
            btn.addEventListener('click', function (e) {
                _callback(e)
            })
        }
    }
    return {
        update:update,
        btn:btn
    }
};

module.exports = PrimaryBtn;