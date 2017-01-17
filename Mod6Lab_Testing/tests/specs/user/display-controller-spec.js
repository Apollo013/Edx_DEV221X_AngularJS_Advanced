describe('User display controller', function(){

    var $rootscope = {};
    var $q = {};
    var $controller, userService, mockDeffered, displayController;

    beforeEach(function(){angular.mock.module('app')});
    beforeEach(inject(function(_$q_) {
    $q = _$q_;
    }));
    beforeEach(function(_$rootScope_, _$controller_, _$q_, _userService_){
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        //$q = _$q_;
        userService = _userService_;

        mockDeferred = $q.defer();
        spyOn(userService, 'getUsers').and.returnValue(mockDeferred.promise);

        displayController = $controller('userDisplayController', {userService: userService});
    });

    it('should have displayController defined', function(){
        expect(displayController).toBeDefined();
    });

    it('should have displayController.executeSearch defined', function(){
        expect(displayController.executeSearch).toBeDefined();
    });
});