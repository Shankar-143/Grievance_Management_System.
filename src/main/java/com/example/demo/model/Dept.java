package com.example.demo.model;

import java.math.BigInteger;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dept {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	// department id

	@Column(unique = true)
	private String deptName;
	// department name

//	@Column(unique = true)
//	private String userName;
	// person username

	@Column(unique = true)
	private String email;
	// Department email id

	private String password;
	private String Name;
	private BigInteger mobileNo;
	private boolean email_verified;
	private String role = "DEPARTMENT";
	private String location;

	public Dept() {

	}

	public Dept(Integer id, String userName, String deptName, String email, String password, String Name,
				BigInteger mobileNo, boolean email_verified, String role) {
		super();
		this.id = id;
		// this.userName = userName;
		this.email = email;
		this.password = password;
		this.Name = Name;
		this.mobileNo = mobileNo;
		this.email_verified = email_verified;
		this.role = role;
		this.deptName = deptName;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return Name;
	}

	public void setName(String firstName) {
		this.Name = firstName;
	}

	public BigInteger getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(BigInteger mobileNo) {
		this.mobileNo = mobileNo;
	}

	public boolean isEmail_verified() {
		return email_verified;
	}

	public void setEmail_verified(boolean email_verified) {
		this.email_verified = email_verified;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Dept [id=" + id + ", deptName=" + deptName + ", email=" + email + ", Name=" + Name
				+ ", mobileNo=" + mobileNo + ", location=" + location + "]";
	}

}
