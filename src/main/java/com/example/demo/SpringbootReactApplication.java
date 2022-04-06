package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;

@SpringBootApplication
public class SpringbootReactApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootReactApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User("aa","wakuwaku@gmail.com"));
		this.userRepository.save(new User("bb","wakuwaku@gmail.com"));
		this.userRepository.save(new User("cc","wakuwaku@gmail.com"));
		
	}

}
