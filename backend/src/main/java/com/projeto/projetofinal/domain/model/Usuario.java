package com.projeto.projetofinal.domain.model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Usuario {
	
	    private String name;
	    private String username;
	    private String password;
	  // private String email;
	    private Contato contato;
	    private Informacao informacao;
	    private Curriculo curriculo;

}
