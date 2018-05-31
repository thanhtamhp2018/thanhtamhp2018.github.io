$uibModal.open({
    templateUrl: 'modal.html',
    controller: 'ModalCtrl',
    animation: true,
    size: 'lg',
    resolve: {
        items: function () {
            return scope.items;
        }
    }
}).result
.then(function (selectedItem) {
    
})
.catch(function () {
    // Modal dismissed.
});