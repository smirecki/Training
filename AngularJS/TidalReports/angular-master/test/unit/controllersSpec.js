'use strict';

/* jasmine specs for controllers go here */

describe('tidalReportApp', function(){

  beforeEach(module('tidalReportApp'));


  it('should create "locations" model with 4 locations', inject(function($controller) {
    //spec body
    var scope = {},
      ctrl = $controller('TideListCtrl', {$scope:scope});
    
    expect(scope.locations.length).toBe(4);
  }));

});
