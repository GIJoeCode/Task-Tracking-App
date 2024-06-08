package com.TrackerApp.TrackerApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.TrackerApp.TrackerApp"})
public class TrackerAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrackerAppApplication.class, args);
	}
}
