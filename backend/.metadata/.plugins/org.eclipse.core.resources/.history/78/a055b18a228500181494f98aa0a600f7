package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entity.Product;
import com.example.demo.repositories.ProductRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	
	@Autowired
	private ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		
	}
	
	public void run(String... args) throws Exception {
		productRepository.save(new Product("$600", "Es un martillo"));
		productRepository.save(new Product("$400", "Es una pala"));
	}
}
