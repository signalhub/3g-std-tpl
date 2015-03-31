module.exports = function() {
    window.g3 = window.g3 || {};

    window.g3.getFormatVal = function(val, digits, showSign) {
        digits = digits || 4;
        showSign = showSign || false;
        var str = val.toFixed(digits).toString().replace('.', ',');
        return (showSign ? (val > 0 ? '+' : '') : '') + str;
    };

    window.g3.getFormatDigit = function(digit, offset) {
        offset = offset || 3;
        var digits = digit.toString().split('');
        var index = digits.length - offset;
        while(index > 0) {
            digits.splice(index, 0, ' ');
            index -= offset;
        }
        return digits.join('');
    };

    window.g3.getCSS = function(element, property) {
        var css = null;

        if(element.currentStyle) {
            css = element.currentStyle[property];
        } else if(window.getComputedStyle) {
            css = document.defaultView.getComputedStyle(element, null).
                getPropertyValue(property);
        }

        return css;
    };

    window.g3.getUrlVars = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    };

    window.g3.replaceAll = function(pattern, arr) {
        for (var key in arr) {
            pattern = pattern.replace('%' + key, arr[key]);
        }
        return pattern;
    };

    window.g3.getFullAPIPath = function(api, serverType, branches) {
        resultURL = api.serverName[serverType];
        var currentBranch = api.branches;
        for(var i = 0; i < branches.length; i++) {
            if('api' in currentBranch) {
                currentBranch = currentBranch.api[branches[i]];
            } else {
                currentBranch = currentBranch[branches[i]];
            }
            if('name' in currentBranch) {
                resultURL += currentBranch.name[serverType];
            } else {
                resultURL += currentBranch[serverType];
            }
        }
        return resultURL;
    };
    
    (function(){
        var dp = document.getElementById('debug-panel');
        function toggleDebugPanel() {
            if(dp.classList.contains('active')) {
                dp.classList.remove('active');
            } else {
                dp.classList.add('active'); 
            }
        }

        window.onkeyup = function(e) {
            if (e.keyCode == 73 && e.ctrlKey && !e.shiftKey) {
                toggleDebugPanel();
            }
        };

        function _addMessage(message) {
            if(dp) {
                var e = document.createElement('pre');
                e.innerHTML = message;
                dp.appendChild(e);
            }
        }

        window.g3.debug = {
            addMessage:_addMessage
        };
    })();

    g3.debug.addMessage('Hello debug');
};
