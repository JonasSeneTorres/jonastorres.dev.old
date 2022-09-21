export class ActivatedRouteMock {
  // public paramMap = of(convertToParamMap({
  //     testId: 'abc123',
  //     anotherId: 'd31e8b48-7309-4c83-9884-4142efdf7271',
  // }));

  snapshot = {
    paramMap: {
      get: (key: string) => {
        switch (key) {
          case 'title':
            return 'my title';
          case 'subtitle':
            return 'my subtitle';
        }
        return '';
      }
    },
  };
}
