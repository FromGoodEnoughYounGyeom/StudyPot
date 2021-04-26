package com.studypot.back.interfaces;

import com.studypot.back.applications.UserService;
import com.studypot.back.domain.User;
import java.net.URI;
import java.net.URISyntaxException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/signup")
  @ResponseStatus(HttpStatus.CREATED)
  public String create(
      @RequestBody User resource
  ) {
    String name = resource.getName();
    String email = resource.getEmail();
    String password = resource.getPassword();

    userService.registerUser(name, email, password);

    return "Successfully registered";

  }

}
