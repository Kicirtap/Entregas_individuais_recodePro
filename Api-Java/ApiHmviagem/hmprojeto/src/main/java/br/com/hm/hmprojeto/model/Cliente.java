package br.com.hm.hmprojeto.model;



import java.io.Serializable;

import java.sql.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CLIENTE")
public class Cliente implements Serializable {
	

	private static final long serialVersionUID = 1L;


		//VARIAVEIS
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private static long id;
		@Column
		private String nome;
		@Column
		private String telefone;
		@Column
		private String email;
		
		
		
		public Cliente() {
			super();
		}
		
		public Cliente(long id, String nome, String telefone, String email, String endereco, Date dt_nascimento,
				long cpf, String senha) {
			super();
			this.id = id;
			this.nome = nome;
			this.telefone = telefone;
			this.email = email;
			
		}
		
		
		public static long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		
		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		
		public String getTelefone() {
			return telefone;
		}
		public void setTelefone(String telefone) {
			this.telefone = telefone;
		}
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		
		

		
		@Override
		public int hashCode() {
			return Objects.hash(id);
		}
		
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Cliente other = (Cliente) obj;
			return id == Cliente.id;
		} 
		
		//
		@Override
		public String toString() {
			return "Pessoa [id=" + id + ", nome=" + nome + ", telefone=" + telefone + ", email=" + email +" ]";
		}
		
		


}