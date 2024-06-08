package com.TrackerApp.TrackerApp.models.data;

import com.TrackerApp.TrackerApp.models.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
}
