//     Stratus.Components.Help 1.0

//     Copyright (c) 2017 by Sitetheory, All Rights Reserved
//
//     All information contained herein is, and remains the
//     property of Sitetheory and its suppliers, if any.
//     The intellectual and technical concepts contained herein
//     are proprietary to Sitetheory and its suppliers and may be
//     covered by U.S. and Foreign Patents, patents in process,
//     and are protected by trade secret or copyright law.
//     Dissemination of this information or reproduction of this
//     material is strictly forbidden unless prior written
//     permission is obtained from Sitetheory.
//
//     For full details and documentation:
//     http://docs.sitetheory.io

// Stratus Help Component
// ----------------------

// Define AMD, Require.js, or Contextual Scope
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['stratus', 'angular', 'angular-material'], factory);
    } else {
        factory(root.Stratus);
    }
}(this, function (Stratus) {
    // TODO: Possibly Convert to Tether-Tooltip
    // This component intends to display help information
    // in an widely accessible tooltip icon standard.
    Stratus.Components.Help = {
        transclude: true,
        controller: function ($scope) {
            Stratus.Instances[_.uniqueId('help_')] = $scope;
            Stratus.Internals.CssLoader(Stratus.BaseUrl + 'sitetheorystratus/stratus/components/help' + (Stratus.Environment.get('production') ? '.min' : '') + '.css');
        },
        templateUrl: Stratus.BaseUrl + 'sitetheorystratus/stratus/components/help' + (Stratus.Environment.get('production') ? '.min' : '') + '.html'
    };
}));
