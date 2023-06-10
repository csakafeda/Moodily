package com.codecool.Moodily.service;

import com.codecool.Moodily.controller.UserNotFoundException;
import com.codecool.Moodily.database.enums.Role;
import com.codecool.Moodily.database.models.UserEntity;
import com.codecool.Moodily.database.models.dto.UserDTO;
import com.codecool.Moodily.database.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private UserEntity createUserFactory(Long id, String username, String email, String password, Role role) {
        return UserEntity.builder()
                .id(id)
                .username(username)
                .email(email)
                .password(password)
                .role(role)
                .build();
    }

    @Test
    void testGetAllUser() {
        UserEntity user1 = createUserFactory(1L, "user1", "user1@gmail.com", "123", Role.USER);
        UserEntity user2 = createUserFactory(2L, "user2", "user2@gmail.com", "456", Role.USER);

        when(userRepository.findAll())
                .thenReturn(Arrays.asList(user1, user2));

        List<UserDTO> result = userService.getAllUser();

        assertEquals(2, result.size());
        assertEquals("user1", result.get(0).username());
        assertEquals("user1@gmail.com", result.get(0).email());
        assertEquals("user2", result.get(1).username());
        assertEquals("user2@gmail.com", result.get(1).email());
    }

    @Test
    void testGetUserById_ExistingUser_ReturnsUser() {
        UserEntity user = createUserFactory(1L, "user1", "user1@gmail.com", "123", Role.USER);
        when(userRepository.findById(1L))
                .thenReturn(Optional.of(user));

        UserDTO result = userService.getUserById(1L);

        assertEquals("user1", result.username());
        assertEquals("user1@gmail.com", result.email());
    }

    @Test
    void testGetUserById_UserNotFound_ThrowsUserNotFoundException() {
        when(userRepository.findById(1L))
                .thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () -> userService.getUserById(1L));
    }

    @Test
    void testGetUserByUsernameAndPassword_ExistingUser_ReturnsUserDTO() {
        UserEntity user =
                createUserFactory(1L, "user1", "user1@gmail.com", "123", Role.USER);
        when(userRepository.findByUsernameAndPassword("user1", "123"))
                .thenReturn(Optional.of(user));

        UserDTO result = userService.getUserByUsernameAndPassword("user1", "123");

        assertEquals("user1", result.username());
        assertEquals("user1@gmail.com", result.email());
    }

    @Test
    void testGetUserByUsernameAndPassword_UserNotFound_ThrowsUserNotFoundException() {
        when(userRepository.findByUsernameAndPassword("user1", "123"))
                .thenReturn(Optional.empty());

        assertThrows(UserNotFoundException.class, () ->
                userService.getUserByUsernameAndPassword("user1", "123"));
    }

    @Test
    void testSaveNewUser() {
        UserEntity user = createUserFactory(null, "user1", "user1@gmail.com", "123", null);
        when(userRepository.save(user))
                .thenReturn(createUserFactory(1L, "user1", "user1@gmail.com", "123", Role.USER));

        UserEntity result = userService.saveNewUser(user);

        assertNotNull(result.getId());
        assertEquals("user1", result.getUsername());
        assertEquals("user1@gmail.com", result.getEmail());
        assertEquals(Role.USER, result.getRole());
    }

    /*
    @Test
    void testUpdateUser() {

    }
     */
}
