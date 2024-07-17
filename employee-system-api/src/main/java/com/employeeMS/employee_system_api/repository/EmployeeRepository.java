package com.employeeMS.employee_system_api.repository;

import com.employeeMS.employee_system_api.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
