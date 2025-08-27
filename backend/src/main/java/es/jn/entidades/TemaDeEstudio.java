package es.jn.entidades;

import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "Temas")
public class TemaDeEstudio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Leccion")
	private AreaDeConocimiento area;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Leccion.class, mappedBy = "tema")
	private Collection<Leccion> lecciones;
	private String nombre;
	private int dificultad;
	
	public TemaDeEstudio() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public AreaDeConocimiento getArea() {
		return area;
	}

	public void setArea(AreaDeConocimiento area) {
		this.area = area;
	}

	public Collection<Leccion> getLecciones() {
		return lecciones;
	}

	public void setLecciones(Collection<Leccion> lecciones) {
		this.lecciones = lecciones;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getDificultad() {
		return dificultad;
	}

	public void setDificultad(int dificultad) {
		this.dificultad = dificultad;
	}

}
