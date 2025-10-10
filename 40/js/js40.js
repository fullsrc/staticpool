if (typeof dosamigos == "undefined" || !dosamigos) {
    var dosamigos = {};
}
dosamigos.toggleColumn = (function ($) {
    var pub = {
        onText: 'On',
        offText: 'Off',
        onTitle: 'On',
        offTitle: 'Off',
        registerHandler: function (grid, selector, cb) {
            $(document)
                .off('click.toggleColumn', selector)
                .on('click.toggleColumn', selector, function (e) {
                    e.preventDefault();
                    var $self = $(this);
                    var url = $self.attr('href');
                    $.ajax({
                        url: url,
                        dataType: 'json',
                        success: function (data) {
                            $self
                                .html(data.value ? pub.onText : pub.offText)
                                .attr('title', data.value ? pub.onTitle : pub.offTitle);
                            $.isFunction(cb) && cb(true, data);
                        },
                        error: function (xhr) {
                            $.isFunction(cb) && cb(false, xhr);
                        }
                    });
                    return false;
                });
        }
    };
    return pub;
})(jQuery);
