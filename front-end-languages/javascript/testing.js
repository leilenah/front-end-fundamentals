// jasmine
describe('deviceready', function() {
  it('should report that it fired', function() {
      spyOn(app, 'report');
      app.deviceready();
      expect(app.report).toHaveBeenCalledWith('deviceready');
  });
});

// snapshot test (match DOM to HTML markup)