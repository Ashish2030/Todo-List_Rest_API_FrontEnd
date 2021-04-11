package com.ashish.TodoList.service;
import com.ashish.TodoList.model.User;
import com.ashish.TodoList.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserService
{
    @Autowired
    public UserRepository userRepository;
  public void insertdata(User u)
  {
     userRepository.save(u);
  }

}
