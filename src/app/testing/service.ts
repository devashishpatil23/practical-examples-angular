// user.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { UserService, User } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockUser: User = { id: 1, name: 'Devashish', email: 'dev@example.com' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Step 1: Import HttpClientTestingModule to mock HTTP calls
      providers: [UserService]
    });

    service = TestBed.inject(UserService); // Step 2: Inject service
    httpMock = TestBed.inject(HttpTestingController); // Step 3: Inject HttpTestingController to control HTTP requests
  });

  afterEach(() => {
    httpMock.verify(); // Step 4: Verify no pending HTTP requests
  });

  // Step 5: Test service creation
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Step 6: Test getUser API call
  it('should fetch user by ID', () => {
    service.getUser(1).subscribe(user => {
      expect(user).toEqual(mockUser); // Verify response matches mock
    });

    // Step 7: Expect a GET request and flush mock data
    const req = httpMock.expectOne('/api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });
});


